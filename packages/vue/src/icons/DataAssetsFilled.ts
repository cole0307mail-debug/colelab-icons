// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DataAssetsFilledSvg from '@colelab/icons-svg/es/asn/DataAssetsFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DataAssetsFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DataAssetsFilledSvg }, slots);
  },
});
