// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SyncOutlinedSvg from '@colelab/icons-svg/es/asn/SyncOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SyncOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SyncOutlinedSvg }, slots);
  },
});
