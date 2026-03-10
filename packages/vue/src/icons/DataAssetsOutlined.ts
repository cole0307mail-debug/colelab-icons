// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DataAssetsOutlinedSvg from '@colelab/icons-svg/es/asn/DataAssetsOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DataAssetsOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DataAssetsOutlinedSvg }, slots);
  },
});
